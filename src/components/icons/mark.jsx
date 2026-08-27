export default function Mark({
  color = "text-[#1e40af]"
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-6 w-5 flex-none ${color}`}
    >
      <path
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clip-rule="evenodd"
        fill-rule="evenodd"
      />
    </svg>
  );
}
