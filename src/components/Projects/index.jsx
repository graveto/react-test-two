import data from "../../data/data.js";

export default function () {
  return (
    <>
      {data.map((img) =>
        <img src={img.imgURI} key={img.title} />
      )}
    </>
  );
}
