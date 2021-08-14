import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieFullInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull?: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {movieFull && (
        <View style={styles.detailsContainer}>
          <View style={styles.voteContainer}>
            <Icon name="star-outline" color="grey" size={16} />
            <Text style={styles.vote}>{movieFull.vote_average}</Text>
            <Text style={styles.genres}>
              - {movieFull.genres.map(g => g.name).join(', ')}
            </Text>
          </View>

          <View style={styles.overviewContainer}>
            <Text style={styles.title}>Historia</Text>
            <Text style={styles.text}>{movieFull.overview}</Text>
          </View>

          <View style={styles.budgetContainer}>
            <Text style={styles.budgetTitle}>Presupuesto: </Text>
            <Text style={styles.text}>
              {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
            </Text>
          </View>

          <View style={styles.castContainer}>
            <Text style={styles.castTitle}>Actores</Text>
            <FlatList
              data={cast}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => <CastItem actor={item} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.castList}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginBottom: 24,
  },
  voteContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  vote: {
    marginLeft: 8,
  },
  genres: {
    marginLeft: 4,
  },
  overviewContainer: {
    marginTop: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  budgetContainer: {
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  budgetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  castContainer: {
    marginTop: 20,
    marginBottom: 100,
  },
  castTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  castList: {
    marginTop: 10,
    height: 70,
  },
});
