const portfolioModules = import.meta.glob('./portfolio/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const developerModules = import.meta.glob('./developer/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const galleryModules = import.meta.glob('./gallery/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const postModules = import.meta.glob('./posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const collectionBasePath = {
  portfolio: '/portfolio',
  developer: '/developer',
  gallery: '/photography',
  posts: '/blog',
};

const fallbackSlug = (path) =>
  path
    .split('/')
    .pop()
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .replace(/\.md$/, '');

const normalizeCategories = (categories) => {
  if (!categories) return [];
  return Array.isArray(categories) ? categories : [categories];
};

const normalizeImages = (images) => {
  if (!Array.isArray(images)) return [];
  return images
    .map((image) => (typeof image === 'string' ? { image_path: image } : image))
    .filter((image) => image?.image_path);
};

const parseScalar = (value) => {
  const trimmed = value.trim();

  if (!trimmed) return null;
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed === 'null') return null;
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
};

const parseKeyValue = (line) => {
  const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
  return match ? [match[1], match[2]] : null;
};

const parseArray = (lines, startIndex) => {
  const items = [];
  let index = startIndex;

  while (index < lines.length) {
    const line = lines[index];

    if (!/^\s+-\s*/.test(line)) break;

    const itemText = line.trim().slice(2);
    const itemPair = parseKeyValue(itemText);

    if (!itemPair) {
      items.push(parseScalar(itemText));
      index += 1;
      continue;
    }

    const item = { [itemPair[0]]: parseScalar(itemPair[1]) };
    index += 1;

    while (
      index < lines.length &&
      /^\s{2,}[A-Za-z0-9_-]+:\s*/.test(lines[index]) &&
      !/^\s+-\s*/.test(lines[index])
    ) {
      const nestedPair = parseKeyValue(lines[index].trim());
      if (nestedPair) item[nestedPair[0]] = parseScalar(nestedPair[1]);
      index += 1;
    }

    items.push(item);
  }

  return [items, index];
};

const parseFrontmatter = (source) => {
  if (!source.startsWith('---')) {
    return { data: {}, content: source };
  }

  const endIndex = source.indexOf('\n---', 3);
  if (endIndex === -1) {
    return { data: {}, content: source };
  }

  const frontmatter = source.slice(3, endIndex).replace(/\r/g, '');
  const content = source.slice(endIndex + 4);
  const lines = frontmatter.split('\n');
  const data = {};
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const pair = parseKeyValue(line);

    if (!pair) {
      index += 1;
      continue;
    }

    const [key, value] = pair;

    if (value.trim()) {
      data[key] = parseScalar(value);
      index += 1;
      continue;
    }

    const nextLine = lines[index + 1] || '';
    if (/^\s+-\s*/.test(nextLine)) {
      const [items, nextIndex] = parseArray(lines, index + 1);
      data[key] = items;
      index = nextIndex;
    } else {
      data[key] = null;
      index += 1;
    }
  }

  return { data, content };
};

const cleanMarkdown = (content) =>
  content
    .replaceAll('\u00e2\u20ac\u2122', "'")
    .replaceAll('\u00e2\u20ac\u0153', '"')
    .replaceAll('\u00e2\u20ac\u009d', '"')
    .replaceAll('\u00e2\u20ac\u201c', '-')
    .replaceAll('\u00e2\u20ac\u201d', '-')
    .replace(/\{%\s*.*?\s*%\}/g, '')
    .replace(/\{\{\s*.*?\s*\}\}/g, '')
    .replace(/<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/g, '[$2]($1)');

const parseCollection = (modules, type) =>
  Object.entries(modules)
    .map(([path, source]) => {
      const { data, content } = parseFrontmatter(source);
      const slug = data.slug || fallbackSlug(path);
      const folder = data.folder || '';
      const image = data.image || '';
      const date = data.date ? new Date(data.date) : null;

      return {
        ...data,
        type,
        slug,
        folder,
        image,
        date,
        categories: normalizeCategories(data.categories),
        images: normalizeImages(data.images),
        content: cleanMarkdown(content),
        coverImage: image ? `/images/${folder ? `${folder}/` : ''}${image}` : '',
        href: data.link || `${collectionBasePath[type]}/${slug}`,
        hidden: data['not-show'] === true,
      };
    })
    .sort((first, second) => (second.date?.getTime() || 0) - (first.date?.getTime() || 0));

export const portfolioProjects = parseCollection(portfolioModules, 'portfolio');
export const developerProjects = parseCollection(developerModules, 'developer');
export const galleryProjects = parseCollection(galleryModules, 'gallery');
export const blogPosts = parseCollection(postModules, 'posts');

export const allEntries = [
  ...portfolioProjects,
  ...developerProjects,
  ...galleryProjects,
  ...blogPosts,
];

export const visiblePortfolioProjects = portfolioProjects.filter((project) => !project.hidden);
export const visibleDeveloperProjects = developerProjects.filter((project) => !project.hidden);
export const visibleGalleryProjects = galleryProjects.filter((project) => !project.hidden);
export const visibleBlogPosts = blogPosts.filter((post) => !post.hidden);
