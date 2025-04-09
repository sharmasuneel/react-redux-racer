
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ParticipantType = 'Bank' | 'Third Party Provider';

export interface Participant {
  id: string;
  organizationName: string;
  shortName: string;
  type: ParticipantType;
  status: 'Pending' | 'Active' | 'Inactive';
}

interface ParticipantsState {
  participants: Participant[];
}

const initialState: ParticipantsState = {
  participants: [
    { id: '1', organizationName: 'Citi Bank', shortName: 'Citi', type: 'Third Party Provider', status: 'Pending' },
    { id: '2', organizationName: 'Citi Bank', shortName: 'Citi', type: 'Third Party Provider', status: 'Pending' },
    { id: '3', organizationName: 'Citi Bank', shortName: 'Citi', type: 'Bank', status: 'Pending' },
    { id: '4', organizationName: 'MARSHAL', shortName: 'MAR', type: 'Bank', status: 'Pending' },
    { id: '5', organizationName: 'wompiagri', shortName: 'wom', type: 'Bank', status: 'Pending' },
    { id: '6', organizationName: 'Bank Of India', shortName: 'bhagya', type: 'Third Party Provider', status: 'Pending' },
  ]
};

export const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    addParticipant: (state, action: PayloadAction<Participant>) => {
      state.participants.push(action.payload);
    },
  },
});

export const { addParticipant } = participantsSlice.actions;
export default participantsSlice.reducer;
