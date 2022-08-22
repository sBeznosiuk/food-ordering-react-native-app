import React, {FC} from 'react';
import {TouchableOpacity, Modal, ModalProps, StyleSheet, Text, View, Button, Dimensions} from 'react-native';

import {PrimaryColors} from '../utils/colors';

interface PaymentModalProps extends ModalProps {
  handleCancel: () => void;
  handleAccept: () => void;
}

export const PaymentModal: FC<PaymentModalProps> = ({handleAccept, handleCancel, ...props}) => (
  <Modal {...props}>
    <View style={styles.backdrop}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Please note</Text>
        <View style={[styles.sectionContainer, styles.firstSection]}>
          <Text style={styles.sectionHeader}>delivery to mainland</Text>
          <Text style={styles.priceText}>N1000 - N2000</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>delivery to island</Text>
          <Text style={styles.priceText}>N2000 - N3000</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button onPress={handleCancel} title="Cancel" color="rgba(0, 0, 0, 0.5)" />
          <TouchableOpacity onPress={handleAccept} style={styles.proceedContainer}>
            <Text style={styles.proceedButton}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width,
  },
  contentContainer: {
    width: 315,
    backgroundColor: PrimaryColors.White,

    borderRadius: 30,
  },
  headerText: {
    paddingLeft: 45,
    backgroundColor: PrimaryColors.Grey,
    paddingVertical: 16,

    color: '#000',
    fontWeight: '700',
    fontSize: 20,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sectionContainer: {
    paddingVertical: 17,
    marginLeft: 45,
    marginRight: 30,
  },
  firstSection: {
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 0.5,
  },
  sectionHeader: {
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  priceText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 17,
  },
  buttonsContainer: {
    marginHorizontal: 18,
    marginVertical: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: 315,
  },
  proceedContainer: {
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PrimaryColors.Orange,
    borderRadius: 30,
    height: 60,
    color: '#FFF',
    marginLeft: 30,
  },
  proceedButton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  },
});
