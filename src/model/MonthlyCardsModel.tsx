export interface MonthlyCardsModel {
    name: string;
    id: string;
    href: string;
    price: {
        monthly: string;
        annually: string;
    }
    description: string;
    features: string[];
    mostPopular: boolean;
}