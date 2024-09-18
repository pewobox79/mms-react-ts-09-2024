type ColorPalete = "red" | "green" | "white"

type Button2Types = {
    style:React.CSSProperties & {color: ColorPalete, backgroundColor: ColorPalete},
    title?: "Save" | "Upload" | "Download"
}


export default function Button2({style, title ="Save"}:Button2Types) {

    return (
        <button style={style}>
            {title}
        </button>
    )
}
