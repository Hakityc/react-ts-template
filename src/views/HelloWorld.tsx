export const HelloWorld = () => {
  return (
    <div className="h-full text-center flex select-none all:transition-400">
      <div className="ma">
        <div className="text-center flex select-none all:transition-400">
          <div className=" p-60 fw600 animate-bounce-alt animate-count-infinite animate-duration-5s">
            <button className="btn btn-primary">Hello World</button>
          </div>
        </div>
      </div>
    </div>
  );
};
