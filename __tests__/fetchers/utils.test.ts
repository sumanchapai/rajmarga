import { isValidFileName } from '@/fetchers/utils'
import { expect, test } from '@jest/globals'
import { describe } from 'node:test'

describe('isValidFileName', () => {
  test('data filename without year and month', () => {
    expect(isValidFileName('data.toml')).toBeFalsy()
  })
  test('data filename without month', () => {
    expect(isValidFileName('data-2020.toml')).toBeFalsy()
  })
  test('data filename without correct separator', () => {
    expect(isValidFileName('data202010.toml')).toBeFalsy()
  })
  test('data filename without correct month', () => {
    expect(isValidFileName('data-2020-13.toml')).toBeFalsy()
  })
  test('data filename without valid prefix 1', () => {
    expect(isValidFileName('dat-2020-13.toml')).toBeFalsy()
  })
  test('data filename without valid prefix 2', () => {
    expect(isValidFileName('dataa-2020-13.toml')).toBeFalsy()
  })
  test('data filename without valid suffix 1', () => {
    expect(isValidFileName('dataa-2020-10.tom')).toBeFalsy()
  })
  test('data filename without valid suffix 2', () => {
    expect(isValidFileName('dataa-2020-10.json')).toBeFalsy()
  })
  test('data filename valid 1', () => {
    expect(isValidFileName('data-2020-10.toml')).toBeTruthy()
  })
  test('data filename valid 2', () => {
    expect(isValidFileName('data-2020-12.toml')).toBeTruthy()
  })
  test('data filename valid 3', () => {
    expect(isValidFileName('data-1999-10.toml')).toBeTruthy()
  })
  test('data filename valid 4', () => {
    expect(isValidFileName('data-2030-10.toml')).toBeTruthy()
  })
})
