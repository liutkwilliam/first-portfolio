import Button from './Button'

function ButtonLink({ href, content, children, ...props }) {
    return (
        <Button href={href} size="lg" {...props}>
            {children ?? content}
        </Button>
    );
}

export default ButtonLink
