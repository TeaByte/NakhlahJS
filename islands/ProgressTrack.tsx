import { useEffect } from "preact/hooks";

interface ProgressTrackProps {
  slug: string;
}

export default function ProgressTrack(props: ProgressTrackProps) {
  useEffect(() => {
    const initializeEditor = () => {
      window.localStorage.setItem(props.slug, "done");
    };
    window.onload = initializeEditor;
    return () => {
      window.onload = null;
    };
  }, []);

  return <></>;
}
