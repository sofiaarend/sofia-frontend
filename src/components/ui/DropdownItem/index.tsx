export default function DropdownItem({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      role="menuitem"
      className={`text-md hover:bg-secondary hover:text-dropdown-hover block w-full px-4 py-2 text-left text-slate-900 ${
        isSelected ? 'bg-primary' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
