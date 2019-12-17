import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Authors from './Authors';

export const actions = {
    onLanguageChange: action('onLanguageChange'),
};

storiesOf('Authors', module)
    .addDecorator(story => <div style={{ width: "25%", padding: '3rem' }}>{story()}</div>)
    .add('default', () => {
        return <Authors
          authors={[
            {
              "firstName":"Emmanuel",
              "lastName":"Degru00e8ve",
              "description":"",
              "metas":{
                "quote":{
                  "en":"citation lorum epsum",
                  "fr":"Lu2019amour commence par soi. lorsque votre relation avec vous-mu00eame est fondu00e9e sur lu2019amour et le respect, toutes vos relations changent.",
                  "nl":"citation lorum epsum"
                },
                "organization":{
                  "name":"org7",
                  "url":"http://www.google.com",
                  "path":"http://api2.tamtam.pro/storage/uploads/folders/4/AVATAR_00e0170bb5fc8a8cae3fd79abdc36c943669673b.png"
                }
              },
              "id":8650,
              "mainEmail":"emmanuel.degreve@degandpartners.com",
              "mainPhone":"+32486210211",
              "userMobilePhone":"",
              "avatar":"storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
              "avatarUrl":"https://s3.eu-west-1.amazonaws.com/tamtam/local/storage/media/IMAGE/31/AVATAR_70d83b21836dec24e6ec10e5d38a0ac3d96cbed2.png",
              "url":"emmanuel-degreve",
              "signature":{
                "title":"Emmanuel Degrève",
                "head":"Président"
              },
              "enableAvatar":true,
              "priority":0
            }
          ]}
          fromViewer={false}
          fromComment={false}
        />
    })
    // .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
    // .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
