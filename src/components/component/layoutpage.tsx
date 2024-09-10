"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { JSX, SVGProps } from "react";

export function HomePagee() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 bg-blue-800">
          <HomeIcon className="w-6 h-6" />
          <span className="ml-2 text-lg font-semibold">Dashboard</span>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Button variant="ghost" className="flex items-center space-x-2">
            <UserIcon className="w-5 h-5" />
            <span>Comportamiento de Agentes</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2">
            <BarChartIcon className="w-5 h-5" />
            <span>Reporte de datos</span>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <Button variant="default" className="flex items-center space-x-2">
              <PlayIcon className="w-5 h-5" />
              <span>Start</span>
            </Button>
            <Button variant="default" className="flex items-center space-x-2">
              <PauseIcon className="w-5 h-5" />
              <span>Pause</span>
            </Button>
            <Button variant="default" className="flex items-center space-x-2">
              <CircleStopIcon className="w-5 h-5" />
              <span>Stop</span>
            </Button>
          </div>
          <div className="flex space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <SettingsIcon className="w-5 h-5 mr-2" />
                  Configurar Simulador
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Label htmlFor="inputValue">Valor de Entrada</Label>
                  <Input id="inputValue" type="number" />
                  <Label htmlFor="initialConditions">
                    Condiciones Iniciales
                  </Label>
                  <Textarea id="initialConditions" rows={3} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Label htmlFor="scenario">Escenario</Label>
                  <Select id="scenario">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar escenario" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scenario1">Escenario 1</SelectItem>
                      <SelectItem value="scenario2">Escenario 2</SelectItem>
                      <SelectItem value="scenario3">Escenario 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Aplicar Cambios</Button>
              </PopoverContent>
            </Popover>
            <Button variant="outline">
              <DownloadIcon className="w-5 h-5 mr-2" />
              Exportar Reporte
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="w-full h-96 bg-green-600 border border-gray-200 rounded-lg shadow-md p-6 ">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-semibold ">Simulador</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function BarChartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function CircleStopIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <rect width="6" height="6" x="9" y="9" />
    </svg>
  );
}

function DownloadIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PauseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function SettingsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
