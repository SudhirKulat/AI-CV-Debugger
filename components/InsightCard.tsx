export default function InsightCard({
  title,
  items,
  color
}: any) {

  return (
    <div className={`p-5 rounded-xl bg-${color}-50 max-h-400 overflow-y-auto border-2 border-solid`}>
      <h3 className={`font-bold text-${color}-700 mb-2`} style={{color}}>
        {title}
      </h3>

      <ul className="space-y-1">
        {items.map((item: string) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}