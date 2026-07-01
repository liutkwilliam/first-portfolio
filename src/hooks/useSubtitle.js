import { useEffect } from "react";

export default function useSubtitle({ title, description }) {
  useEffect(() => {
    if (title) document.title = `${title} | William Liu's Portfolio`;

    if (description) {
      let meta = document.querySelector('meta[name="description"]');

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", description);
    }
  }, [title, description]);
}