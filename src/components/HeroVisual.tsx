"use client";

import React, { useState } from "react";
import { Server, ShieldCheck, Activity, Database, Cpu, CheckCircle2, Terminal } from "lucide-react";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"architecture" | "telemetry" | "code">("architecture");

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Radiant Cyan & Blue ambient backglow (NO PURPLE) */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00D8F6]/25 via-[#0284C7]/20 to-[#2563EB]/25 rounded-3xl blur-2xl opacity-70 -z-10 group-hover:opacity-100 transition duration-700" />

      {/* Main Container Card */}
      <div className="relative rounded-2xl bg-[#070D1B] border border-white/[0.1] shadow-2xl overflow-hidden backdrop-blur-2xl">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#0D1527] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/50 shadow-sm shadow-[#FF5F56]/20" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/50 shadow-sm shadow-[#FFBD2E]/20" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/50 shadow-sm shadow-[#27C93F]/20" />
            <span className="ml-2 font-mono text-xs text-[#94A3B8] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#00D8F6]" />
              spring-cloud-cluster.sys
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center bg-[#15223C] rounded-lg p-0.5 border border-white/[0.08] text-[11px] font-mono">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === "architecture"
                  ? "bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white font-medium shadow-sm shadow-[#0284C7]/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Mesh
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === "telemetry"
                  ? "bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white font-medium shadow-sm shadow-[#0284C7]/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Metrics
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === "code"
                  ? "bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white font-medium shadow-sm shadow-[#0284C7]/40"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              Service.java
            </button>
          </div>
        </div>

        {/* Dynamic Visual Content */}
        <div className="p-5 font-mono text-xs min-h-[340px] flex flex-col justify-between bg-circuit-mesh">
          {activeTab === "architecture" && (
            <div className="space-y-4">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px]">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
                  </span>
                  <span className="font-semibold tracking-wide">EUREKA: 4 ACTIVE INSTANCES</span>
                </div>
                <span className="text-[#00D8F6] font-semibold bg-[#00D8F6]/10 px-2 py-0.5 rounded border border-[#00D8F6]/25">
                  GATEWAY :8080
                </span>
              </div>

              {/* Distributed Topology Diagram */}
              <div className="relative py-2">
                {/* Gateway Node */}
                <div className="p-3.5 rounded-xl bg-[#0F1A30]/90 border border-[#0284C7]/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0284C7]/15 text-[#00D8F6] border border-[#0284C7]/30">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-xs tracking-wide">
                        Spring Cloud Gateway
                      </div>
                      <div className="text-[10px] text-[#94A3B8]">
                        JWT Auth Filter • Dynamic Routing • Resilience4j
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold shadow-sm">
                    ONLINE
                  </span>
                </div>

                {/* Microservices Interconnect Lines */}
                <div className="grid grid-cols-3 gap-3 my-3">
                  {/* Service 1: File Storage */}
                  <div className="p-3 rounded-xl bg-[#0A1224] border border-white/[0.08] hover:border-[#00D8F6]/60 transition-all group shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <Server className="w-3.5 h-3.5 text-[#00D8F6]" />
                      <span className="text-[9px] text-[#94A3B8] bg-white/[0.04] px-1.5 py-0.5 rounded">
                        :8081
                      </span>
                    </div>
                    <div className="text-white text-[11px] font-semibold truncate">Storage-Service</div>
                    <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1 font-sans">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Circuit: CLOSED
                    </div>
                  </div>

                  {/* Service 2: Metadata / JPA */}
                  <div className="p-3 rounded-xl bg-[#0A1224] border border-white/[0.08] hover:border-[#38BDF8]/60 transition-all group shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <Database className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span className="text-[9px] text-[#94A3B8] bg-white/[0.04] px-1.5 py-0.5 rounded">
                        :8082
                      </span>
                    </div>
                    <div className="text-white text-[11px] font-semibold truncate">Metadata-Service</div>
                    <div className="text-[10px] text-[#38BDF8] mt-1 flex items-center gap-1 font-sans">
                      <span>JPA / H2 Cluster</span>
                    </div>
                  </div>

                  {/* Service 3: Event Broker / Auth */}
                  <div className="p-3 rounded-xl bg-[#0A1224] border border-white/[0.08] hover:border-[#06B6D4]/60 transition-all group shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <Cpu className="w-3.5 h-3.5 text-[#06B6D4]" />
                      <span className="text-[9px] text-[#94A3B8] bg-white/[0.04] px-1.5 py-0.5 rounded">
                        :8083
                      </span>
                    </div>
                    <div className="text-white text-[11px] font-semibold truncate">Auth-Service</div>
                    <div className="text-[10px] text-[#06B6D4] mt-1 flex items-center gap-1 font-sans">
                      <span>JWT Security</span>
                    </div>
                  </div>
                </div>

                {/* Realtime Request Log Stream */}
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.06] text-[10px] space-y-1">
                  <div className="text-[#94A3B8] flex items-center justify-between">
                    <span className="text-emerald-400 font-medium">POST /api/v1/files/upload</span>
                    <span className="text-white font-semibold">201 CREATED</span>
                    <span className="text-[#00D8F6]">12ms</span>
                  </div>
                  <div className="text-[#94A3B8] flex items-center justify-between">
                    <span className="text-[#38BDF8]">GET /eureka/apps/STORAGE-SERVICE</span>
                    <span className="text-white font-semibold">200 OK</span>
                    <span className="text-[#00D8F6]">4ms</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "telemetry" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#0F1A30]/80 border border-white/[0.07] shadow-sm">
                  <div className="text-[#94A3B8] text-[10px] tracking-wide">THROUGHPUT</div>
                  <div className="text-lg font-bold text-white mt-1">1,480 req/s</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                    <Activity className="w-3 h-3" /> p99 Latency: 16ms
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#0F1A30]/80 border border-white/[0.07] shadow-sm">
                  <div className="text-[#94A3B8] text-[10px] tracking-wide">JVM HEAP ALLOCATION</div>
                  <div className="text-lg font-bold text-white mt-1">342 MB / 1024 MB</div>
                  <div className="text-[10px] text-[#00D8F6] mt-0.5">GC Pause: &lt; 2ms (G1)</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0F1A30]/80 border border-white/[0.07] shadow-sm">
                  <div className="text-[#94A3B8] text-[10px] tracking-wide">CIRCUIT BREAKER</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">CLOSED (100% UP)</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">Failure rate: 0.00%</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0F1A30]/80 border border-white/[0.07] shadow-sm">
                  <div className="text-[#94A3B8] text-[10px] tracking-wide">ACTIVE THREAD POOL</div>
                  <div className="text-lg font-bold text-white mt-1">28 Active / 200 Max</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">Queue depth: 0</div>
                </div>
              </div>

              {/* Memory distribution bar */}
              <div className="p-3 rounded-xl bg-black/50 border border-white/[0.06]">
                <div className="flex justify-between text-[10px] text-[#94A3B8] mb-1.5">
                  <span>Spring Context Allocation</span>
                  <span className="text-emerald-400 font-semibold">Nominal</span>
                </div>
                <div className="w-full h-2 bg-[#15223C] rounded-full overflow-hidden flex">
                  <div className="h-full bg-[#00D8F6]" style={{ width: "45%" }} />
                  <div className="h-full bg-[#0284C7]" style={{ width: "25%" }} />
                  <div className="h-full bg-[#10B981]" style={{ width: "15%" }} />
                </div>
                <div className="flex gap-4 text-[9px] text-[#94A3B8] mt-2">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#00D8F6]" />Eden 45%</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />Survivor 25%</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />Tenured 15%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="p-3 rounded-xl bg-black/70 border border-white/[0.07] text-[11px] leading-relaxed text-[#94A3B8] overflow-x-auto">
              <p><span className="text-[#00D8F6]">@RestController</span></p>
              <p><span className="text-[#00D8F6]">@RequestMapping</span>(<span className="text-emerald-400">&quot;/api/v1/storage&quot;</span>)</p>
              <p><span className="text-[#00D8F6]">@RequiredArgsConstructor</span></p>
              <p><span className="text-[#38BDF8]">public class</span> <span className="text-white font-semibold">StorageController</span> &#123;</p>
              <p className="pl-4 text-[#94A3B8]/60">// Dynamic Discovery &amp; Resilience4j Fallback</p>
              <p className="pl-4">
                <span className="text-[#00D8F6]">@CircuitBreaker</span>(name = <span className="text-emerald-400">&quot;storageService&quot;</span>, fallbackMethod = <span className="text-emerald-400">&quot;storageFallback&quot;</span>)
              </p>
              <p className="pl-4">
                <span className="text-[#00D8F6]">@PostMapping</span>(<span className="text-emerald-400">&quot;/upload&quot;</span>)
              </p>
              <p className="pl-4">
                <span className="text-[#38BDF8]">public</span> ResponseEntity&lt;FileResponse&gt; upload(
              </p>
              <p className="pl-8">
                <span className="text-[#00D8F6]">@RequestParam</span>(<span className="text-emerald-400">&quot;file&quot;</span>) MultipartFile file
              </p>
              <p className="pl-4">) &#123;</p>
              <p className="pl-8 text-white">
                <span className="text-[#38BDF8]">return</span> ResponseEntity.ok(storageService.store(file));
              </p>
              <p className="pl-4">&#125;</p>
              <p>&#125;</p>
            </div>
          )}

          {/* Footer Status Line */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D8F6] animate-pulse" />
              <span>JVM 21 (LTS) • Spring Boot 3.x</span>
            </div>
            <div className="text-[#00D8F6] font-mono">
              Resilience4j active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
