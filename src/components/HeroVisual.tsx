"use client";

import React, { useState, useEffect } from "react";
import { Server, ShieldCheck, Activity, Database, Cpu, CheckCircle2, Terminal } from "lucide-react";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"architecture" | "telemetry" | "code">("architecture");
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => (prev + 1) % 100);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient gradient glow behind the terminal */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#4169FF]/25 via-[#9747FF]/20 to-[#4169FF]/10 rounded-2xl blur-xl opacity-75 -z-10 group-hover:opacity-100 transition duration-1000" />

      {/* Main Container Card */}
      <div className="relative rounded-2xl bg-[#0B0B10] border border-white/[0.09] shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#111116] border-b border-white/[0.07] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]/40" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]/40" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]/40" />
            <span className="ml-2 font-mono text-xs text-[#A1A1AA] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#4169FF]" />
              spring-cloud-cluster.sys
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center bg-[#171720] rounded-lg p-0.5 border border-white/[0.06] text-[11px] font-mono">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === "architecture"
                  ? "bg-[#4169FF] text-white font-medium shadow-sm"
                  : "text-[#A1A1AA] hover:text-white"
              }`}
            >
              Mesh
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === "telemetry"
                  ? "bg-[#4169FF] text-white font-medium shadow-sm"
                  : "text-[#A1A1AA] hover:text-white"
              }`}
            >
              Metrics
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeTab === "code"
                  ? "bg-[#4169FF] text-white font-medium shadow-sm"
                  : "text-[#A1A1AA] hover:text-white"
              }`}
            >
              Service.java
            </button>
          </div>
        </div>

        {/* Dynamic Visual Content */}
        <div className="p-5 font-mono text-xs min-h-[340px] flex flex-col justify-between">
          {activeTab === "architecture" && (
            <div className="space-y-4">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px]">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>EUREKA DISCOVERY: 4 ACTIVE INSTANCES</span>
                </div>
                <span className="text-[#A1A1AA]/70">GATEWAY :8080</span>
              </div>

              {/* Distributed Topology Diagram */}
              <div className="relative py-2">
                {/* Gateway Node */}
                <div className="p-3 rounded-xl bg-[#171720]/80 border border-[#4169FF]/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#4169FF]/10 text-[#4169FF] border border-[#4169FF]/20">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-xs tracking-wide">
                        Spring Cloud Gateway
                      </div>
                      <div className="text-[10px] text-[#A1A1AA]">
                        JWT Auth Filter • Rate Limiter • Dynamic Routing
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    HEALTHY
                  </span>
                </div>

                {/* Microservices Interconnect Lines */}
                <div className="grid grid-cols-3 gap-3 my-3">
                  {/* Service 1: File Storage */}
                  <div className="p-3 rounded-xl bg-[#111116] border border-white/[0.08] hover:border-[#4169FF]/50 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <Server className="w-3.5 h-3.5 text-[#4169FF]" />
                      <span className="text-[9px] text-[#A1A1AA] bg-white/[0.04] px-1.5 py-0.5 rounded">
                        :8081
                      </span>
                    </div>
                    <div className="text-white text-[11px] font-semibold truncate">Storage-Service</div>
                    <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Circuit: CLOSED
                    </div>
                  </div>

                  {/* Service 2: Metadata / JPA */}
                  <div className="p-3 rounded-xl bg-[#111116] border border-white/[0.08] hover:border-[#9747FF]/50 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <Database className="w-3.5 h-3.5 text-[#9747FF]" />
                      <span className="text-[9px] text-[#A1A1AA] bg-white/[0.04] px-1.5 py-0.5 rounded">
                        :8082
                      </span>
                    </div>
                    <div className="text-white text-[11px] font-semibold truncate">Metadata-Service</div>
                    <div className="text-[10px] text-[#A1A1AA] mt-1 flex items-center gap-1">
                      <span>JPA / H2 Cluster</span>
                    </div>
                  </div>

                  {/* Service 3: Event Broker / Auth */}
                  <div className="p-3 rounded-xl bg-[#111116] border border-white/[0.08] hover:border-cyan-400/50 transition-colors group">
                    <div className="flex items-center justify-between mb-2">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-[9px] text-[#A1A1AA] bg-white/[0.04] px-1.5 py-0.5 rounded">
                        :8083
                      </span>
                    </div>
                    <div className="text-white text-[11px] font-semibold truncate">Auth-Service</div>
                    <div className="text-[10px] text-cyan-400 mt-1 flex items-center gap-1">
                      <span>JWT Session Pool</span>
                    </div>
                  </div>
                </div>

                {/* Realtime Request Log Stream */}
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05] text-[10px] space-y-1">
                  <div className="text-[#A1A1AA] flex items-center justify-between">
                    <span className="text-emerald-400">POST /api/v1/files/upload</span>
                    <span className="text-white font-medium">201 CREATED</span>
                    <span className="text-[#A1A1AA]/60">12ms</span>
                  </div>
                  <div className="text-[#A1A1AA] flex items-center justify-between">
                    <span className="text-[#4169FF]">GET /eureka/apps/STORAGE-SERVICE</span>
                    <span className="text-white font-medium">200 OK</span>
                    <span className="text-[#A1A1AA]/60">4ms</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "telemetry" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#171720]/70 border border-white/[0.06]">
                  <div className="text-[#A1A1AA] text-[10px]">THROUGHPUT</div>
                  <div className="text-lg font-bold text-white mt-1">1,480 req/s</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                    <Activity className="w-3 h-3" /> p99 Latency: 16ms
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#171720]/70 border border-white/[0.06]">
                  <div className="text-[#A1A1AA] text-[10px]">JVM HEAP USAGE</div>
                  <div className="text-lg font-bold text-white mt-1">342 MB / 1024 MB</div>
                  <div className="text-[10px] text-cyan-400 mt-0.5">GC Pause: &lt; 2ms (G1)</div>
                </div>
                <div className="p-3 rounded-xl bg-[#171720]/70 border border-white/[0.06]">
                  <div className="text-[#A1A1AA] text-[10px]">CIRCUIT BREAKER</div>
                  <div className="text-lg font-bold text-emerald-400 mt-1">CLOSED (100% UP)</div>
                  <div className="text-[10px] text-[#A1A1AA] mt-0.5">Failure rate: 0.00%</div>
                </div>
                <div className="p-3 rounded-xl bg-[#171720]/70 border border-white/[0.06]">
                  <div className="text-[#A1A1AA] text-[10px]">THREAD POOL</div>
                  <div className="text-lg font-bold text-white mt-1">28 Active / 200 Max</div>
                  <div className="text-[10px] text-[#A1A1AA] mt-0.5">Queue depth: 0</div>
                </div>
              </div>

              {/* Memory distribution bar */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05]">
                <div className="flex justify-between text-[10px] text-[#A1A1AA] mb-1.5">
                  <span>Spring Context Allocation</span>
                  <span className="text-white font-medium">Healthy</span>
                </div>
                <div className="w-full h-2 bg-[#171720] rounded-full overflow-hidden flex">
                  <div className="h-full bg-[#4169FF]" style={{ width: "45%" }} />
                  <div className="h-full bg-[#9747FF]" style={{ width: "25%" }} />
                  <div className="h-full bg-emerald-500" style={{ width: "15%" }} />
                </div>
                <div className="flex gap-4 text-[9px] text-[#A1A1AA] mt-2">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#4169FF]" />Eden 45%</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#9747FF]" />Survivor 25%</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Tenured 15%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="p-3 rounded-xl bg-black/60 border border-white/[0.06] text-[11px] leading-relaxed text-[#A1A1AA] overflow-x-auto">
              <p><span className="text-[#9747FF]">@RestController</span></p>
              <p><span className="text-[#9747FF]">@RequestMapping</span>(<span className="text-emerald-400">&quot;/api/v1/storage&quot;</span>)</p>
              <p><span className="text-[#9747FF]">@RequiredArgsConstructor</span></p>
              <p><span className="text-[#4169FF]">public class</span> <span className="text-white font-semibold">StorageController</span> &#123;</p>
              <p className="pl-4 text-[#A1A1AA]/60">// Dynamic Discovery &amp; Circuit Breaker</p>
              <p className="pl-4">
                <span className="text-[#9747FF]">@CircuitBreaker</span>(name = <span className="text-emerald-400">&quot;storageService&quot;</span>, fallbackMethod = <span className="text-emerald-400">&quot;storageFallback&quot;</span>)
              </p>
              <p className="pl-4">
                <span className="text-[#9747FF]">@PostMapping</span>(<span className="text-emerald-400">&quot;/upload&quot;</span>)
              </p>
              <p className="pl-4">
                <span className="text-[#4169FF]">public</span> ResponseEntity&lt;FileResponse&gt; upload(
              </p>
              <p className="pl-8">
                <span className="text-[#9747FF]">@RequestParam</span>(<span className="text-emerald-400">&quot;file&quot;</span>) MultipartFile file
              </p>
              <p className="pl-4">) &#123;</p>
              <p className="pl-8 text-white">
                <span className="text-[#4169FF]">return</span> ResponseEntity.ok(storageService.store(file));
              </p>
              <p className="pl-4">&#125;</p>
              <p>&#125;</p>
            </div>
          )}

          {/* Footer Status Line */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4169FF] animate-pulse" />
              <span>JVM 21 (LTS) • Spring Boot 3.x</span>
            </div>
            <div className="text-[#A1A1AA]/80 font-mono">
              Resilience4j active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

