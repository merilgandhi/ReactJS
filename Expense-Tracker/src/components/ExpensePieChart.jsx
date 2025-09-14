import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";
import { selectExpenseByCategory } from "../features/transactions/selectors";

const COLORS = ["#A78BFA", "#34D399", "#F472B6", "#F59E0B", "#22D3EE", "#60A5FA", "#F87171"];

const RAD = Math.PI / 180;
// Custom percentage label inside slices
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RAD);
  const y = cy + radius * Math.sin(-midAngle * RAD);
  const pct = `${Math.round((percent || 0) * 100)}%`;
  return (
    <text x={x} y={y} fill="#fff" fontSize="12" textAnchor="middle" dominantBaseline="central">
      {pct}
    </text>
  );
};

export default function ExpensePieChart() {
  const data = useSelector(selectExpenseByCategory);

  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-5">
      <h2 className="text-lg font-semibold text-white mb-2">Expenses by Category</h2>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              innerRadius={60}
              label={renderLabel}
              labelLine={false}
            >
              {data.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: "rgba(17, 24, 39, 0.9)", border: "none", borderRadius: 12 }}
              itemStyle={{ color: "#fff" }}
              formatter={(value, name) => [`₹ ${Number(value).toFixed(2)}`, name]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {data.length === 0 && (
        <p className="text-sm text-white/70 mt-2">Add some expenses to see the chart</p>
      )}
    </div>
  );
}
