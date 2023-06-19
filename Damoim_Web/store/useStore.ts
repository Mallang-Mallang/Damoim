import { create } from 'zustand';

const useStore = create((set) => ({
  title: '',
  meetingDate: '',
  location: '',
  lat: '',
  lng: '',
  category: '',
  authorEmail: '',
  setTitle: (text: string) => set({ title: text }),
  setMeetingDate: (text: string) => set({ meetingDate: text }),
  setLocation: (text: string) => set({ location: text }),
  setLat: (text: string) => set({ lat: text }),
  setLng: (text: string) => set({ lng: text }),
  setCategory: (text: string) => set({ category: text }),
  setAuthorEmail: (text: string) => set({ authorEmail: text }),
}));

export default useStore;
