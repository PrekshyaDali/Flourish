export default function Button(props) {
  return (
    <button
      type="submit"
      className="h-10 w-full  px-4 py-1 border-2 bg-[#F9B131] rounded-xl text-md  font-semibold hover:bg-green-600 focus:outline-none active:bg-[#F9B131]"
    >
      {props.name}
    </button>
  );
}
