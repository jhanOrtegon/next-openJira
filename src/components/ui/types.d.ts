export type TColumnOpenJira = {
    title:string,
    iconAdd?:boolean,
    children: React.ReactNode,
    onShowNewEntry?: any
}

export type TItemColumn = {
    note:string,
    children?: React.ReactNode, 
    date: string
}

export type propsNewEntry  = {
    showModal: boolean, 
    onCloseModal: any,
    onSave: any,
    onChangeTextarea: any,
    description: string,
    helperColor: any,
    color: any,
    helperText: string,  
}