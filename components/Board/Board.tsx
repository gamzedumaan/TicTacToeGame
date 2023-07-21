import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export type Boards = {
  onPress: () => void;
  board: string;
};
export default function Board({onPress, board}: Boards) {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <TouchableOpacity
              key={cellIndex}
              style={styles.cell}
              onPress={() => onPress(rowIndex, cellIndex)}>
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: 'center',
  },
  cellText: {
    fontSize: 36,
  },
});
