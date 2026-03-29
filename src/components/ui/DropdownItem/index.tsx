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
      className={`text-md hover:bg-secondary hover:text-on-secondary text-on-background block w-full px-4 py-2 text-left ${
        isSelected ? 'bg-pressed' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
