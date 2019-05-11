import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import user from 'assets/user.jpg'
import { Wrapper, User, Channel } from 'components/TabClient'
import Contact from 'view/Contact'

class TabClient extends Component {
 
  componentDidMount() {
    console.log(this.props)  
  }

  changeText = () => {
    console.log('text edited')
  };

  render() { 
    return (
      <Wrapper main>

        <User>
          <img src={user} alt="logo"/>
          <span>Виталий Давиденко</span>
        </User>

        <h3>Канал связи:</h3>
        <Wrapper list>
          <Channel faName="fab fa-telegram-plane">@Vitaliy243</Channel>
          <Channel faName="fas fa-phone-volume">Виталий Давиденко</Channel>
        </Wrapper>

        <h3>Контакти: </h3>
        {this.props.contacts.map(item => <Contact
                                            delete={this.props.actions.deleteItem}
                                            edit={this.props.actions.editItem} 
                                            item={item}
                                          />)}

        <h3>Примечание:</h3>
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.props.about} 
          disabled={false}      
          onChange={this.changeText} 
          tagName='p' 
        />
      </Wrapper>
    )
  }
}
 
export default TabClient;