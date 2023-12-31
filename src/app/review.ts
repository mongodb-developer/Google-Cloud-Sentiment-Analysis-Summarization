import { BSON } from 'realm-web';

export interface NewReview {
    name: string;
    text: string;
    date: string;
}

export interface RawReview extends NewReview {
    _id: string | BSON.ObjectId;
    restaurant_id: string | BSON.ObjectId;
}

export interface CustomerReview extends RawReview {
    sentiment: string;
    food: number;
    service: number;
    interior: number;
    total: number;
}
