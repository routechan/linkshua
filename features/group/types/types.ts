export type LinkData = {
    id:string,
    title:string,
    description:string | null,
    links:LinkType[],
    createdAt:Date,
    updatedAt:Date,
}
export type LinkType = {
    id:string,
    url:string,
    name:string,
    memo:string | null,
    groupId:string,
    createdAt:Date,
    updatedAt:Date,
}