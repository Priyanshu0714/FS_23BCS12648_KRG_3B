import useWindowSize from "./windowresize";

function Information() {
  const { width, height } = useWindowSize();

  return (
    <>
      <h2>Window size info</h2>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </>
  );
}

export default Information;
