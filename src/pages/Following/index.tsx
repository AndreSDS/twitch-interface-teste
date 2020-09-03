import React from 'react';
import { View, FlatList } from 'react-native';

import { Container, Wrapper, Main } from './styles';
import Header from '../../components/Header';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const {data, indexes} = React.useMemo(()=>{
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <View />
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <View />,
        isTitle: true
      },
      {
        key: 'C1',
        render: () => <View />
      },
      {
        key: 'LIVES_CHANNELS',
        render: () => <View />,
        isTitle: true
      },
      {
        key: 'C2',
        render: () => <View />
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <View />,
        isTitle: true
      },
      {
        key: 'C3',
        render: () => <View />
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <View />,
        isTitle: true
      }
    ]

    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes
    }

  },[])
  
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({item}) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}
            //efeito de refresh
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
