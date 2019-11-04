export const Game_Server = {
    Players: [],
    Picture_Deck: [
        "Picture 1",
        "Picture 2"
    ],
    Caption_Deck: [
        "caption - 1",
        "caption - 2",
        "caption - 3",
        "caption - 4",
        "caption - 5",
        "caption - 6",
        "caption - 7",
        "caption - 8",
        "caption - 9",
        "caption - 10",
    ],
    Top_of_Caption_Deck: 0,
    Top_of_Picture_Deck: 0,
    Dealer: -1,
    Captions_In_Play: [], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1,
    
    get_Hand(amount = 7){
        this.Top_of_Caption_Deck += amount;
        return this.Caption_Deck.slice(this.Top_of_Caption_Deck - amount, this.Top_of_Caption_Deck);
    },

    get_Next_Picture(){
        return this.Picture_Deck[this.Top_of_Picture_Deck++];
    }
}

export const Game_Client = {
    Players: [
        { name: "Moshe", points: 0 },
        { name: "Bernie", points: 0 },
        { name: "Donald", points: 0 },
        { name: "Andrew", points: 0 },
    ],
    Dealer: 0,
    Captions_In_Play: [], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1
}

export var My_Captions = [

];

export class Player {
    name;
    points;
    captions;
}