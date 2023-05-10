
export function LongTxt({ txt, isLongTxtShown }) {
    if (!txt) return <div></div>
    if (isLongTxtShown) return <div>{txt}</div>
    return <div>{txt.substring(0, 100)}...</div>
}