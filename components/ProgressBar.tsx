export default function ProgressBar(props: { progress: number }) {
  const widthStyle = { width: `${props.progress}%` };
  return (
    <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden p-1">
      <div className="relative h-6 flex items-center justify-center">
        <div
          className="absolute top-0 bottom-0 right-0 rounded-lg bg-info"
          style={widthStyle}
        >
          <div className="relative text-black font-medium text-sm text-center">
            {props.progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
