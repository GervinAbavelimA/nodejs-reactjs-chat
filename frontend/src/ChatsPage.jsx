import { PrettyChatWindow } from 'react-chat-engine-pretty'
/*chat-engine command*/
const ChatsPage = (props) => {
    return ( 
    <div style={{ height: '100vh'}}>
        <PrettyChatWindow
        projectId='d91cf5dc-0fbb-4da7-b97e-cd3ea15eab7c'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage;