import Image from "next/image";

interface EmptyProps {
    label: string;
}


export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image alt="Empty" src="/empty.png" quality={75} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <p className="text-muted-foreground text-sm text-center pt-7 pl-10">
                {label}
            </p>
        </div>
    );
}