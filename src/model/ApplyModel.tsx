import { ChangeEvent } from "react";

export interface ApplyModel {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};