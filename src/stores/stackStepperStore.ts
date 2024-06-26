import { create } from 'zustand'
import { StepInfo, SelectFields } from '@/types/step'

interface StepperStoreState {
  stepsInfo: StepInfo[]
  selectFields: SelectFields
  selectNum: number[]
  isGroup: boolean[]
  groupName: string[]
  setSelectFields: (newSelectFields: SelectFields) => void
  setHandleSelectFields: (name: string, value: string) => void
}

export const useStackStepperStore = create<StepperStoreState>(set => ({
  stepsInfo: [
    {
      step: '관심 개발 분야',
      label: '관심 개발 분야를 선택해 주세요.',
      stepTitle: 'task',
      fields: ['Front-end', 'Back-end', 'Full Stack'],
    },
    {
      step: '프로그래밍 언어',
      label: '메인 프로그래밍 언어를 선택해 주세요.',
      stepTitle: 'language',
      fields: ['C', 'Java', 'Python', 'C++', 'C#', 'JavaScript', 'PHP', ' Assembly language', 'SQL', 'Visual Basic'],
    },
    {
      step: '프레임 워크',
      label: '주력 프레임 워크를 선택해 주세요.',
      stepTitle: 'framework',
      fields: [
        ['React', 'Angular', 'Vue.js', 'jQuery'],
        ['Django', 'AppMaster', 'Express.js', 'Flask', 'Ruby on Rails', 'Spring'],
      ],
    },
  ],
  selectFields: {
    task: '',
    main_language: '',
    sub_language: '',
    main_framework: '',
    sub_framework: '',
  },
  selectNum: [1, 2, 2],
  isGroup: [false, false, true],
  groupName: ['Front-end', 'Back-end'],
  setSelectFields: newSelectFields => set(state => ({ ...state, selectFields: newSelectFields })),
  setHandleSelectFields: (name, value) =>
    set(state => ({
      selectFields: {
        ...state.selectFields,
        [name]: value,
      },
    })),
}))
