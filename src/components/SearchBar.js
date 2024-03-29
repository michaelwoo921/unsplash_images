import React from 'react';

class SearchBar extends React.Component {
    state={ term: ''}

    onInputChange=(e)=>{
        this.setState({term: e.target.value });
        
    }

    onFormSubmit= (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Image Search </label>
                    <input type="text" value={this.state.term} onChange={(e)=> this.onInputChange(e) }/>
                </form>
            </div>
            
        );
    }
}

export default SearchBar;