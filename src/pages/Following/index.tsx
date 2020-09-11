import React from "react";
import { View, FlatList } from "react-native";

import { Container, Wrapper, Main } from "./styles";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import CategoryList from "../../components/CategoryList";
import StreamList from "../../components/StreamList";
import ChannelList from "../../components/ChannelList";

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },
      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <Title>Follwed Category</Title>,
        isTitle: true,
      },
      {
        key: "C1",
        render: () => <CategoryList />,
      },
      {
        key: "LIVES_CHANNELS",
        render: () => <Title>Lives Channels</Title>,
        isTitle: true,
      },
      {
        key: "C2",
        render: () => <StreamList />,
      },
      {
        key: "CONTINUE_WATCHING",
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: "C3",
        render: () => <StreamList />,
      },
      {
        key: "OFFLINE_CHANNELS",
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      {
        key: "C4",
        render: () => <ChannelList />,
      },
    ];

    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
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
