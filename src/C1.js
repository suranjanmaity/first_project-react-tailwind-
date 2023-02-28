let Anything = () => {
    return (
    <>
    <h1>Anything component</h1>
    <p>//ignore this tag This is a <b>p</b> tag.</p>
    <ul>
        There are some rules for naming components
        <li>You can give Anything as name of a component</li>
        <li>First character should be capital</li>
        <li>First character can be any alphabet or _ or $</li>
        <li>Special character is not allowed except $ and _</li>
    </ul>
    </>
    );
}
const $Dollar = () => {
    return (
    <h1>$Dollar component</h1>
    );
}
const _underscore = () => {
    return (
        <h1>_underscore component</h1>
    );
}
export {Anything,$Dollar};
export default _underscore;
