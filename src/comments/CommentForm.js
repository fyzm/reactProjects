class CommentForm extends PureComponent {
    static propTypes = {
        comments: PropTypes.object.isRequired
    }
    render() {
        <div>
            <form onSubmit={evt => evt.preventDefault()}>
                <textarea style={{display:'block',width:"100%"}}></textarea>
                <button>Submit</button>
            </form>
        </div>
    }
}