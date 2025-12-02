// components/admin/Card.tsx
type CardProps = {
    title: string;
    value: string | number;
    description?: string;
};

export default function Card({ title, value, description }: CardProps) {
    return (
        <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-2xl mt-2">{value}</p>
            {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
    );
}
