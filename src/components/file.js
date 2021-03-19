export default function File(props) {
    const fileType = props.name.split(".")[1];
    const iconToDisplay = {
        mp3: "headphones",
        jpeg: "file image",
        png: "file image outline"
    };
    return (
        <div>
            <i className={`${iconToDisplay[fileType]} icon`}></i>
            {props.name}
        </div>
    )
}