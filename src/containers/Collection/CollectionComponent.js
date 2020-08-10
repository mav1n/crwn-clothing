import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './Collection.styles.scss';
import {
  selectCollection,
  selectCollections,
} from '../../redux/shop/shopSelectors';

const CollectionPage = ({ collection, collections }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollections(state),
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
