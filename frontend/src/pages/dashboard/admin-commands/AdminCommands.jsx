import React from 'react';
import Terminal from 'terminal-in-react';
import faker from 'faker';

const AdminCommands = () => {
  console.log('AdminCommands');
  const showMsg = () => 'Hello World';
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Terminal
          color="green"
          backgroundColor="black"
          barColor="black"
          style={{ fontWeight: 'bold', fontSize: '1em' }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: showMsg,
            popup: () => alert('Terminal in React'),
            'type-text': (args, print, runCommand) => {
              const text = args.slice(1).join(' ');
              print('');
              for (let i = 0; i < text.length; i += 1) {
                setTimeout(() => {
                  runCommand(`edit-line ${text.slice(0, i + 1)}`);
                }, 100 * i);
              }
            },
            'admin-find': (args, print) => {
              const user = args[0];
              print(`found user ${user} ${faker.name.findName()}`);
            },
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert',
            popup: 'alert',
            'type-text': 'types text, usage: type-text <arg1> <arg2> ...',
            'admin-find': 'finds a user, usage: admin-find <user>',
          }}
          msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
        />
      </div>
    </div>
  );
};

export default AdminCommands;
