export default function ProgressBar(props: { progress: number }) {
  // min default must be 5 for better style
  const defultWidth = (props.progress < 5 && props.progress > 0) ? 5 : props.progress;
  const widthStyle = { width: `${defultWidth}%` };
  return (
    <div className="bg-base-100 rounded-box shadow-sm overflow-hidden p-1">
      <div className="relative h-6 flex items-center justify-center">
        <div
          className="absolute top-0 bottom-0 right-0 rounded-box bg-[#5bbcd1]"
          style={widthStyle}
        >
          <div
            className={"relative font-medium text-sm text-center " +
              (props.progress > 0 && "text-black")}
          >
            {props.progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
