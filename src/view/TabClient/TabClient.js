import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import user from 'assets/user.jpg'
import { Wrapper, User, Channel } from 'components/TabClient'
import Contact from 'view/TabClient/Contact'

class TabClient extends Component {

  changeText = () => {
    console.log('text edited')
  };

  render() { 
    const { actions, contacts, about } = this.props
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
        {contacts.map(item => 
          <Contact
            delete={actions.deleteItem}
            edit={actions.editItem} 
            item={item}
          />
        )}

        <h3>Примечание:</h3>
        <ContentEditable
          innerRef={this.contentEditable}
          html={about} 
          disabled={false}      
          onChange={this.changeText} 
          tagName='p' 
        />
      </Wrapper>
    )
  }
}
 
export default TabClient;