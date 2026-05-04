/* @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { Provider } from "../../../components/ui/provider";
import { useCharacterDetail } from "../hooks/useCharacterDetail";
import type { Character } from "../types/rick-and-morty";
import CharacterDetail from "./CharacterDetail";

vi.mock("../hooks/useCharacterDetail", () => ({
  useCharacterDetail: vi.fn(),
}));

const mockedUseCharacterDetail = vi.mocked(useCharacterDetail);

const mockCharacter: Character = {
  id: 42,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: { name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1" },
  location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  created: "2017-11-04T18:48:46.250Z",
};

describe("CharacterDetail", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  beforeEach(() => {
    mockedUseCharacterDetail.mockReset();
  });

  it("uses the apiId prop to recover and render character details", () => {
    mockedUseCharacterDetail.mockReturnValue({
      character: mockCharacter,
      isLoading: false,
      errorMessage: null,
    });

    render(
      <Provider>
        <CharacterDetail apiId={42} onBack={vi.fn()} />
      </Provider>,
    );

    expect(mockedUseCharacterDetail).toHaveBeenCalledWith(42);
    expect(screen.getAllByText("Rick Sanchez").length).toBeGreaterThan(0);
    expect(screen.getByText("2 episodes found")).toBeTruthy();
  });
});

