import React from 'react';
import {Cast} from '../interfaces/creditsInterface';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.image} />}
      <View style={styles.actorInfo}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.subtitle}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    marginRight: 20,
    paddingRight: 12,
    marginHorizontal: 20,
  },
  actorInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
});
