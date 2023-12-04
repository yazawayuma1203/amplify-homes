import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TestModel01MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTestModel01 = {
  readonly id: string;
  readonly userName?: string | null;
  readonly age?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestModel01 = {
  readonly id: string;
  readonly userName?: string | null;
  readonly age?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestModel01 = LazyLoading extends LazyLoadingDisabled ? EagerTestModel01 : LazyTestModel01

export declare const TestModel01: (new (init: ModelInit<TestModel01, TestModel01MetaData>) => TestModel01) & {
  copyOf(source: TestModel01, mutator: (draft: MutableModel<TestModel01, TestModel01MetaData>) => MutableModel<TestModel01, TestModel01MetaData> | void): TestModel01;
}

type EagerHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home, HomeMetaData>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}