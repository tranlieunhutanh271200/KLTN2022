import './tag.css'
export const TagType = {
    WARNING: 'tag-warning',
    INFOR: 'tag-info',
    DANGER: 'tag-danger',
    SUCCESS: 'tag-success',
    PRIMARY: 'tag-primary'
}
const TagComponent = ({name, type = TagType.INFOR, action}) => {
    return ( <div className={type}>
        {name}
    </div> );
}

export default TagComponent;