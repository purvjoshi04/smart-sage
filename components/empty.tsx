import Image from "next/image";

interface EmptyProps {
    label: string;
}


export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-73 w-73">
                <Image alt="Empty" src="/empty.png" height={600} width={600}/>
            </div>
            <p className="text-muted-foreground text-sm text-center pt-7 pl-10">
                {label}
            </p>
        </div>
    );
}