import React, { Component } from 'react'
import { connect } from 'react-redux';
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";


function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}



class connectedForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        console.log(id)
        const forbiddenWords = ['spam', 'money'];
        const foundWord = forbiddenWords.filter( word => title.includes(word))
        if(foundWord) {
            return this.props.titleForbidden();
        }
        this.props.addArticle({ title, id});
        this.setState({title: ""});
    }

    componentDidMount() {
        console.log(`i logged oooooh`)
    }

  render() {
      const { title } = this.state;
      

    return (
      <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
            </div>

            <button type="submit" className="btn">SAVE</button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(connectedForm);
export default Form;