// define this component as class to fix the component
// unmounting when using the filtering
import React from 'react';
import { View } from "react-native"
import RepositoryListSortingPicker from "./RepositoryListSortingPicker"
import RepositoryListFilter from "./RepositoryListFilter";

export class RepositoryListHeaderContainer extends React.Component {
  renderHeader = () => {
    const stateProps = this.props;
    const {
      searchKeyword,
      setSearchKeyword,
      ...sortingProps
    } = stateProps;

    return (
      <View>
        <RepositoryListFilter
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
        <RepositoryListSortingPicker {...sortingProps} />
      </View>
    );
  };

  render() {
    return this.renderHeader();
  }
}

// import { View } from "react-native"
// import RepositoryListSortingPicker from "./RepositoryListSortingPicker"
// import RepositoryListFilter from "./RepositoryListFilter";
//
// const RepositoryListHeaderContainer = (stateProps) => {
//   const {
//     searchKeyword,
//     setSearchKeyword,
//     ...sortingProps
//   } = stateProps;

//   return (
//     <View>
//       <RepositoryListFilter
//         searchKeyword={searchKeyword}
//         setSearchKeyword={setSearchKeyword}
//       />
//       <RepositoryListSortingPicker {...sortingProps} />
//     </View>
//   );
// };

// export default RepositoryListHeaderContainer;
