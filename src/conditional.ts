type Friedns = "Sojib" | "Rahad" | "Forhad" | "Nobin";

type RemoveFriend<T, K> = T extends K ? never : T;
type CurrentFriend = RemoveFriend<Friedns, "Nobin">